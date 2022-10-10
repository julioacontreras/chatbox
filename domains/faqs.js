const faqs = {
    documents: [
      {
        intent: '¿Me quedaré sin gas en algún momento?',
        answerKey: 'a1',
      },
      {
        intent: '¿El cambio de compañía de gas, tendrá algún tipo de coste para mí?',
        answerKey: 'a2',
      },
      {
        intent: '¿Puedo elegir otras comercializadoras para mi contrato de gas?',
        answerKey: 'a3',
      },
      {
        intent: '¿Qué pasará con mi contrato de luz ahora?',
        answerKey: 'a4',
      },
    ],
    answers: [
      {
        answerKey: 'a1',
        answer: 'No. Seguirás disfrutando de gas sin interrupción alguna.'
      },
      {
        answerKey: 'a2',
        answer: 'No. El cambio no te supondrá cargo alguno.'
      },
      {
        answerKey: 'a3',
        answer: 'Por supuesto. Como te decimos, nuestra recomendación es que pases tu contrato a la tarifa TUR de una comercializadora regulada. Esto es porque disfrutarás de un precio reducido por tu gas, regulado por el Estado. Pero si prefieres pasarte a una comercializadora del mercado libre, puedes hacerlo. Ten en cuenta que, según algunos estudios, hay diferencias de hasta el 291% en el precio del kWh en el mercado libre frente a la Tarifa de Último Recurso (TUR). Aquí te dejamos un **listado con las cuatro comercializadoras de último recurso** para que puedas adelantarte y gestionar el cambio.'
      },
      {
        answerKey: 'a4',
        answer: 'No te preocupes por nada, tu contrato de Luz no se verá afectado. En Holaluz apostamos por la energía sostenible que cuida de nuestro planeta. ¡Por eso seguimos comercializando luz de origen 100% renovable! Como hemos hecho siempre'
      }
    ]
  }

  module.exports = { faqs }