import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { status } = await req.json();

    const agendamento = await prisma.agendamento.update({
      where: { id: Number(id) },
      data: { status },
    });

    return NextResponse.json(agendamento);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao atualizar agendamento." },
      { status: 500 }
    );
  }
}