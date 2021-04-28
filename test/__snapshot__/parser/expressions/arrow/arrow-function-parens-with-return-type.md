# Kataw parser test case

## Input

`````js
var foo = ((foo)): string => {};
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 12,
                                    "end": 15
                                },
                                "flags": 256,
                                "start": 11,
                                "end": 16
                            },
                            "flags": 256,
                            "start": 9,
                            "end": 17
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 17
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 25,
                    "end": 28
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "string",
                    "rawText": "string",
                    "flags": 768,
                    "start": 18,
                    "end": 25
                },
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 30,
                        "end": 30
                    },
                    "flags": 256,
                    "start": 28,
                    "end": 31
                },
                "flags": 256,
                "start": 18,
                "end": 31
            },
            "flags": 128,
            "start": 18,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "var foo = ((foo)): string => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 17, end: 18
✖ Statement expected - start: 17, end: 18

```

