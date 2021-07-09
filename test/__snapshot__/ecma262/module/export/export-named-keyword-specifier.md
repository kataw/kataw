# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {try};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "declaration": null,
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 289,
                    "specifiers": [
                        {
                            "kind": 291,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "try",
                                "rawText": "try",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 11
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 11
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 11
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 6,
                "end": 12
            },
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": true,
    "source": "export {try};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
export { try  };
```

### Diagnostics

```javascript
✔ No errors
```

