# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
var x; export {x: a}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 6,
                "start": 0,
                "end": 13
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
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 15,
                                "end": 16
                            },
                            "binding": null,
                            "flags": 128,
                            "start": 15,
                            "end": 16
                        }
                    ],
                    "flags": 128,
                    "start": 15,
                    "end": 16
                },
                "flags": 0,
                "start": 13,
                "end": 16
            },
            "exportFromClause": null,
            "fromClause": null,
            "flags": 128,
            "start": 6,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 17,
                "end": 19
            },
            "flags": 128,
            "start": 17,
            "end": 19
        }
    ],
    "isModule": true,
    "text": "var x; export {x: a}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 16, end: 17
✖ Statement expected - start: 19, end: 20

```

