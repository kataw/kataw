# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {a \u0061s b} from "x";
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
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 8,
                                "end": 9
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 8,
                            "end": 9
                        },
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "as",
                                "rawText": "a",
                                "flags": 96,
                                "start": 9,
                                "end": 17
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 9,
                            "end": 17
                        },
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 17,
                                "end": 19
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 17,
                            "end": 19
                        }
                    ],
                    "flags": 16,
                    "start": 8,
                    "end": 19
                },
                "flags": 0,
                "start": 6,
                "end": 20
            },
            "exportFromClause": null,
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 20,
                    "end": 25
                },
                "from": {
                    "kind": 201392131,
                    "text": "x",
                    "rawText": " \"x\"",
                    "flags": 96,
                    "start": 25,
                    "end": 29
                },
                "flags": 0,
                "start": 20,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": true,
    "source": "export {a \\u0061s b} from \"x\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
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

