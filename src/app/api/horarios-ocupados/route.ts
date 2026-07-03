import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const data = searchParams.get("data");

  if (!data) {
    return NextResponse.json(
      { error: "Data é obrigatória." },
      { status: 400 }
    );
  }

  try {
    const agendamentos = await prisma.agendamento.findMany({
      where: {
        data,
        status: { not: "cancelado" },
      },
      select: { horario: true },
    });

    const horariosOcupados = agendamentos.map((a: { horario: string }) => a.horario);

    return NextResponse.json(horariosOcupados);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao buscar horários." },
      { status: 500 }
    );
  }
}