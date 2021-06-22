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
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 8,
                                "end": 9
                            },
                            "asKeyword": {
                                "kind": 16494,
                                "flags": 16464,
                                "start": 9,
                                "end": 17
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 17,
                                "end": 19
                            },
                            "flags": 16,
                            "start": 8,
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
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "start": 20,
                    "end": 25
                },
                "from": {
                    "kind": 201392131,
                    "text": "x",
                    "rawText": "\"x\"",
                    "flags": 96,
                    "start": 25,
                    "end": 29
                },
                "flags": 0,
                "start": 20,
                "end": 29
            },
            "exportKind": 0,
            "flags": 80,
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

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 9, end: 17

```

