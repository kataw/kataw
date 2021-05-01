# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {foo as bar} from "foo";
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
                                "text": "as",
                                "rawText": "as",
                                "flags": 96,
                                "start": 11,
                                "end": 14
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 11,
                            "end": 14
                        },
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 14,
                                "end": 18
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 14,
                            "end": 18
                        }
                    ],
                    "flags": 16,
                    "start": 8,
                    "end": 18
                },
                "flags": 0,
                "start": 6,
                "end": 19
            },
            "exportFromClause": null,
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 19,
                    "end": 24
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": " \"foo\"",
                    "flags": 96,
                    "start": 24,
                    "end": 30
                },
                "flags": 0,
                "start": 19,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": true,
    "source": "export {foo as bar} from \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
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

