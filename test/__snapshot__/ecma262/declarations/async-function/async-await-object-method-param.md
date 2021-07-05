# Kataw parser test case

## Input

`````js
async function foo(a = {async bar() { await b }}) {};
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 14,
                "end": 18
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 19,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 352,
                                            "start": 24,
                                            "end": 29
                                        },
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 29,
                                                "end": 33
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 288,
                                                "start": 34,
                                                "end": 35
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 208,
                                                                "awaitKeyword": {
                                                                    "kind": 82196,
                                                                    "flags": 64,
                                                                    "start": 37,
                                                                    "end": 43
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 96,
                                                                    "start": 43,
                                                                    "end": 45
                                                                },
                                                                "flags": 32,
                                                                "start": 37,
                                                                "end": 45
                                                            },
                                                            "flags": 16,
                                                            "start": 37,
                                                            "end": 45
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 37,
                                                    "end": 45
                                                },
                                                "flags": 32,
                                                "start": 35,
                                                "end": 47
                                            },
                                            "flags": 288,
                                            "start": 33,
                                            "end": 47
                                        },
                                        "flags": 32,
                                        "start": 24,
                                        "end": 47
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 24,
                                "end": 47
                            },
                            "flags": 48,
                            "start": 22,
                            "end": 48
                        },
                        "flags": 34,
                        "start": 19,
                        "end": 48
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 19,
                "end": 48
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 51,
                    "end": 51
                },
                "flags": 32,
                "start": 49,
                "end": 52
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 52
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 52,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "async function foo(a = {async bar() { await b }}) {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

async function foo(a = { async bar(){
    await b;
  } }) {}
```

### Diagnostics

```javascript
✔ No errors
```

