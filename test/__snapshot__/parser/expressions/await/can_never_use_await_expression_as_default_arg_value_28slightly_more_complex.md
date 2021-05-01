# Kataw parser test case

## Input

`````js
function call(foo= 5 + (await bar())){}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "call",
                "rawText": "call",
                "flags": 96,
                "start": 8,
                "end": 13
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 14,
                            "end": 17
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 201392130,
                                "text": 5,
                                "rawText": "5",
                                "flags": 96,
                                "start": 18,
                                "end": 20
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "flags": 64,
                                "start": 20,
                                "end": 22
                            },
                            "right": {
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "flags": 32,
                                    "start": 22,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 22,
                                "end": 29
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 29
                        },
                        "flags": 34,
                        "start": 14,
                        "end": 29
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 29,
                            "end": 33
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 29,
                        "end": 33
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 13,
                "end": 34
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 33,
                    "end": 33
                },
                "flags": 32,
                "start": 33,
                "end": 33
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 33,
                "end": 33
            },
            "flags": 16,
            "start": 33,
            "end": 35
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 38,
                "end": 38
            },
            "flags": 16,
            "start": 37,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "function call(foo= 5 + (await bar())){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 29, end: 33
✖ ',' expected - start: 33, end: 34
✖ Unexpected token. - start: 33, end: 34
✖ Expression expected - start: 35, end: 36
✖ Expected a `;` - start: 35, end: 36
✖ Statement expected - start: 35, end: 36
✖ Statement expected - start: 36, end: 37

```

