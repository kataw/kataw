# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
var foo; export {[foo]}
`````

## Output

### CST

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
                "flags": 80,
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
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 7
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "start": 8,
                "end": 15
            },
            "declaration": null,
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 261,
                    "specifiers": [],
                    "flags": 16,
                    "start": 17,
                    "end": 17
                },
                "flags": 0,
                "start": 15,
                "end": 17
            },
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 16,
            "start": 8,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 18,
                            "end": 21
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 18,
                    "end": 21
                },
                "flags": 32,
                "start": 17,
                "end": 22
            },
            "flags": 16,
            "start": 17,
            "end": 22
        }
    ],
    "isModule": true,
    "source": "var foo; export {[foo]}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 17, end: 18
✖ Declaration or statement expected - start: 22, end: 23

```

