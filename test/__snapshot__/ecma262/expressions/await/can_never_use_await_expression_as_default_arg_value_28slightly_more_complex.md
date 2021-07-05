# Kataw parser test case

## Input

`````js
function call(foo= 5 + (await bar())){}
`````

## Output

### CST

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
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "call",
                "rawText": "call",
                "flags": 96,
                "start": 8,
                "end": 13
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 14,
                            "end": 17
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
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
                                "kind": 99634,
                                "flags": 96,
                                "start": 20,
                                "end": 22
                            },
                            "right": {
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "expressions": [],
                                    "flags": 32,
                                    "start": 22,
                                    "end": 29
                                },
                                "flags": 22,
                                "start": 32,
                                "end": 29
                            },
                            "flags": 96,
                            "start": 18,
                            "end": 29
                        },
                        "flags": 34,
                        "start": 14,
                        "end": 29
                    },
                    {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 29,
                        "end": 33
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 14,
                "end": 33
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
                "rawText": "",
                "flags": 64,
                "start": 33,
                "end": 33
            },
            "flags": 16,
            "start": 33,
            "end": 35
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
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

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 30, end: 33
✖ ',' expected - start: 33, end: 34
✖ Expression expected - start: 35, end: 36
✖ Declaration or statement expected - start: 36, end: 37

```

