# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {default} from "foo";
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
                                "original": "default",
                                "text": "default",
                                "rawText": "default",
                                "flags": 96,
                                "start": 8,
                                "end": 15
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 8,
                            "end": 15
                        }
                    ],
                    "flags": 16,
                    "start": 8,
                    "end": 15
                },
                "flags": 0,
                "start": 6,
                "end": 16
            },
            "exportFromClause": null,
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 16,
                    "end": 21
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "original": "\"foo\"",
                    "rawText": " \"foo\"",
                    "flags": 96,
                    "start": 21,
                    "end": 27
                },
                "flags": 0,
                "start": 16,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": true,
    "source": "export {default} from \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
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

