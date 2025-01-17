import { Query } from './query';
export declare enum DataWebhookPayloadScheduledPlanType {
    Look = "Look",
    Dashboard = "Dashboard"
}
export interface DataWebhookPayloadScheduledPlan {
    /** ID of the scheduled plan */
    scheduled_plan_id: number | null;
    /** Title of the scheduled plan. */
    title: string | null;
    /** Type of content of the scheduled plan. Valid values are: "Look", "Dashboard". */
    type: DataWebhookPayloadScheduledPlanType;
    /** URL of the content item in Looker. */
    url: string | null;
    /** ID of the query that the data payload represents. */
    query_id: number | null;
    /** Query that was run (not available for dashboards) */
    query: Query | null;
    /** A boolean representing whether this schedule payload has customized the filter values compared to the underlying content item. */
    filters_differ_from_look: boolean;
    /** If this scheduled plan is from an integration that has included "url" in its supported_download_settings, this field contains a temporary URL that can be used to fetch the query results. The temporary URL will expire 3600 seconds after the time the schedule was run. The temporary URL will expire after one use. */
    download_url: string | null;
}
export interface RequestDataWebhookPayloadScheduledPlan {
}
