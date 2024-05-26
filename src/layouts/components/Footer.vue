<template>
  <div class="h-100 d-flex align-center justify-space-between">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center">
      &copy;
      {{ new Date().getFullYear() }}
      {{ $t('made-with') }}
      <VIcon
        icon="tabler-heart"
        color="error"
        size="1.25rem"
        class="mx-1"
      />
      {{ $t('by') }} <a
        href="https://sbu.ac.ir"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
      >
        {{ $t('sbu-students') }}
      </a>
    </span>
  </div>
</template>
