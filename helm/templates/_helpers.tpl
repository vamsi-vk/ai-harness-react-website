{{- define "ai-harness-website.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{- define "ai-harness-website.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- include "ai-harness-website.name" . }}
{{- end }}
{{- end }}

{{- define "ai-harness-website.labels" -}}
helm.sh/chart: {{ .Chart.Name }}-{{ .Chart.Version | replace "+" "_" }}
app.kubernetes.io/name: {{ include "ai-harness-website.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{- define "ai-harness-website.selectorLabels" -}}
app.kubernetes.io/name: {{ include "ai-harness-website.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}
