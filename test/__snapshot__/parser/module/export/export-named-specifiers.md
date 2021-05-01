# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {foo, bar};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "declaration": null,
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 261,
                    "specifiers": [
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "original": "foo",
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 8,
                                "end": 11
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 8,
                            "end": 11
                        },
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "original": "bar",
                                "text": "bar",
                                "rawText": " bar",
                                "flags": 96,
                                "start": 12,
                                "end": 16
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 12,
                            "end": 16
                        }
                    ],
                    "flags": 16,
                    "start": 8,
                    "end": 16
                },
                "flags": 0,
                "start": 6,
                "end": 17
            },
            "exportFromClause": null,
            "fromClause": null,
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": true,
    "source": "export {foo, bar};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

