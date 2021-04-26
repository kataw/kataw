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
                "flags": 768,
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
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 8,
                                "end": 11
                            },
                            "binding": null,
                            "autofix": 0,
                            "flags": 128,
                            "start": 8,
                            "end": 11
                        },
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 768,
                                "start": 12,
                                "end": 16
                            },
                            "binding": null,
                            "autofix": 0,
                            "flags": 128,
                            "start": 12,
                            "end": 16
                        }
                    ],
                    "autofix": 0,
                    "flags": 128,
                    "start": 8,
                    "end": 16
                },
                "autofix": 0,
                "flags": 0,
                "start": 6,
                "end": 17
            },
            "exportFromClause": null,
            "fromClause": null,
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": true,
    "text": "export {foo, bar};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

