import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const agendamentos = await prisma.agendamento.findMany({
      orderBy: { criadoEm: "desc" },
    });
    return NextResponse.json(agendamentos);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao buscar agendamentos." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, telefone, nomePet, servico, data, horario } = body;

    if (!nome || !telefone || !nomePet || !servico || !data || !horario) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const agendamento = await prisma.agendamento.create({
      data: { nome, telefone, nomePet, servico, data, horario },
    });

    return NextResponse.json(agendamento, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}