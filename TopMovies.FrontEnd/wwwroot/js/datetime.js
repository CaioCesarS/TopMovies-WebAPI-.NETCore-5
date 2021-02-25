/**
 * VARIABLES
 */
moment.defineLocale("pt-br", {
  months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
    "_"
  ),
  monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
  weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
    "_"
  ),
  weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
  weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY [às] LT",
    LLLL: "dddd, D [de] MMMM [de] YYYY [às] LT",
  },
  calendar: {
    sameDay: "[Hoje às] LT",
    nextDay: "[Amanhã às] LT",
    nextWeek: "dddd [às] LT",
    lastDay: "[Ontem às] LT",
    lastWeek: function () {
      return this.day() === 0 || this.day() === 6
        ? "[Último] dddd [às] LT" // Saturday + Sunday
        : "[Última] dddd [às] LT"; // Monday - Friday
    },
    sameElse: "L",
  },
  relativeTime: {
    future: "em %s",
    past: "%s atrás",
    s: "segundos",
    m: "um minuto",
    mm: "%d minutos",
    h: "uma hora",
    hh: "%d horas",
    d: "um dia",
    dd: "%d dias",
    M: "um mês",
    MM: "%d meses",
    y: "um ano",
    yy: "%d anos",
  },
  ordinal: "%dº",
});

const daterangepickerPortugueseFormat = {
  buttonClasses: "btn",
  applyClass: "btn-primary",
  cancelClass: "btn-secondary",
  locale: {
    applyLabel: "Aplicar",
    cancelLabel: "Cancelar",
    fromLabel: "De",
    toLabel: "A",
    customRangeLabel: "Personalizado",
  },
  ranges: {
    Hoje: [moment(), moment()],
    Ontem: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    "Último 7 Dias": [moment().subtract(6, "days"), moment()],
    "Últimos 30 Dias": [moment().subtract(29, "days"), moment()],
    "Este Mês": [moment().startOf("month"), moment().endOf("month")],
    "Mês Passado": [
      moment().subtract(1, "month").startOf("month"),
      moment().subtract(1, "month").endOf("month"),
    ],
  },
};

const datepickerPortugueseFormat = {
  language: "pt-BR", // importar
  todayHighlight: true,
  autoclose: true,
  format: {
    toDisplay: function (date) {
      var d = new Date(date);
      return d.toLocaleDateString("pt-BR", { timeZone: "UTC" });
    },
    toValue: function (date) {
      return new Date(date);
    },
  },
};

/**
 * FUNCTIONS
 */

/**
 * @param {string} date - 21/02/2019 | 2019/02/21
 * @returns {string} 2019-02-21
 */
function toInternationalDate(date) {
  if (!date) return;
  if (typeof date === "string" || date instanceof String) {
    if (!date.includes("/")) {
      return date;
    }
    const dateParts = date.split("/");
    return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
  }
  const offset = date.getTimezoneOffset();
  datetime = new Date(date.getTime() + offset * 60 * 1000);
  return datetime.toISOString().split("T")[0];
}

/**
 * @param {string} date - 2019-02-21
 * @returns {string} 21/02/2019
 */
function toBrazilianDate(date) {
  if (!date) return;
  if (date.includes("/")) {
    return date;
  }
  const dateOnly = date.split("T")[0];
  const parts = dateOnly.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

/**
 * @param {string} date - 2020-11-11T14:18:54.5898498
 * @returns {string} 21/02/2019 14:18:54
 */
function toBrazilianDateTimeZone(date) {
  if (!date) return;
  if (date.includes("/")) {
    return date;
  }
  const dateOnly = date.split("T")[0];
  const timeOnly = date.split("T")[1].split('.')[0];
  const parts = dateOnly.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]} ${timeOnly}`;
}
