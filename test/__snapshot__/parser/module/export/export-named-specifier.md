# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {foo};
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
                        }
                    ],
                    "autofix": 0,
                    "flags": 128,
                    "start": 8,
                    "end": 11
                },
                "autofix": 0,
                "flags": 0,
                "start": 6,
                "end": 12
            },
            "exportFromClause": null,
            "fromClause": null,
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": true,
    "text": "export {foo};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
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

