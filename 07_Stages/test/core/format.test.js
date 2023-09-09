const os = require('os');
const {formatBytes} = require('../../core/format');

describe('formatBytes', () => {
    it('debería formatear bytes a kilobytes correctamente', () => {
      expect(formatBytes(1024)).toBe('1.00 KB');
      expect(formatBytes(2048)).toBe('2.00 KB');
    });
  
    it('debería formatear bytes a megabytes correctamente', () => {
      expect(formatBytes(1048576)).toBe('1.00 MB');
      expect(formatBytes(2097152)).toBe('2.00 MB');
    });
  
    it('debería formatear bytes menores a 1024 como KB', () => {
      expect(formatBytes(512)).toBe('0.50 KB');
      expect(formatBytes(256)).toBe('0.25 KB');
    });
  
    it('debería formatear bytes mayores a 1048576 como MB', () => {
      expect(formatBytes(1048577)).toBe('1.00 MB');
      expect(formatBytes(2097153)).toBe('2.00 MB');
    });
  
    it('debería manejar el valor cero correctamente', () => {
      expect(formatBytes(0)).toBe('0.00 KB');
    });
  });