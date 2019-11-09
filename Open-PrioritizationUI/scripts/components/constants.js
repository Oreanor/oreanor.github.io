export default {
	teamProject: 'Открытие',
	team: 'Текущая деятельность',
	workspaceOptions: [
		'Групповой приоритет по проектам и направлениям',
		'Групповой приоритет по текущей деятельности',
		'Перевод задач в работу по проектам и направлениям',
		'Перевод задач в работу по текущей деятельности'
	],
	logOptions: ['Сегодня', 'История изменений'],
	protocol: 'https://',
	apiLink: '/OTRS%20API/api/OTRSCatalog/GetCatalog?name=',
	xlsLink:
		'/PrioritizationDictionariesApi/api/ReportToExcel',
	dics: ['project', 'department', 'direction'],
	allOptions: [
		'Все департаменты',
		'Все направления',
		'Все проекты'
	],
	featureColumns: [
		{
			head: 'ID',
			property: 'Id',
			weight: 2
		},
		{
			head: 'Название',
			property: 'System.Title',
			weight: 4
		},
		{
			head: 'Дата ТК',
			property: 'Microsoft.VSTS.Scheduling.DateTK',
			weight: 2
		},
		{
			head: 'Цель реализации',
			property: 'Logrocon.TargetR',
			weight: 1
		},
		{
			head: 'Описание/Требования',
			property: 'System.Description',
			weight: 4
		},
		{
			head: 'Подтверждение регулятора',
			property: 'Logrocon.RegulatorP',
			weight: 2
		},
		{
			head: 'Направление',
			property: 'Logrocon.Direction',
			weight: 3
		},
		{
			head: 'Ответственный от заказчика',
			property: 'Logrocon.CustomerContact.1C',
			weight: 4
		},
		{
			head: 'Дата активации',
			property: 'Microsoft.VSTS.Common.ActivatedDate',
			weight: 2
		},
		{
			head: 'Статус',
			property: 'System.State',
			weight: 2
		},
		{
			head: 'ИТ-куратор',
			property: 'Logrocon.ITContact',
			weight: 4
		},
		{
			head: 'Департамент',
			property: 'Logrocon.CustomerDept',
			weight: 3
		},
		{
			head: 'Проект',
			property: 'Logrocon.Project.Target2',
			weight: 3
		},
		{
			head: 'Приоритет',
			property: 'GroupPriority',
			weight: 1
		}
	],
	revisionsColumns: [
		{
			head: 'Дата версии',
			property: 'System.ChangedDate',
			weight: 1
		},
		{
			head: 'Редактор',
			property: 'System.ChangedBy',
			weight: 2
		}
	]
};
