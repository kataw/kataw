# Kataw parser test case

## Input

`````js
type a = {function((((-1) => [c|d]))):string};
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "function",
                                "rawText": "function",
                                "flags": 96,
                                "start": 10,
                                "end": 18
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 19,
                                    "end": 19
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 290,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 288,
                                                "arrowTypeParameterList": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "start": 25,
                                                    "end": 28
                                                },
                                                "arrowToken": {
                                                    "kind": 292,
                                                    "parameters": [
                                                        {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 313,
                                                                "subtractionToken": {
                                                                    "kind": 134318643,
                                                                    "flags": 64,
                                                                    "start": 22,
                                                                    "end": 23
                                                                },
                                                                "text": 1,
                                                                "flags": 2097216,
                                                                "start": 22,
                                                                "end": 24
                                                            },
                                                            "flags": 2097152,
                                                            "start": 22,
                                                            "end": 24
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 21,
                                                    "end": 28
                                                },
                                                "returnType": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 147,
                                                        "elementTypes": [
                                                            {
                                                                "kind": 139,
                                                                "bitwiseOrToken": null,
                                                                "bitwiseAndToken": null,
                                                                "type": {
                                                                    "kind": 137,
                                                                    "types": [
                                                                        {
                                                                            "kind": 144,
                                                                            "typeName": {
                                                                                "kind": 134299649,
                                                                                "text": "c",
                                                                                "rawText": "c",
                                                                                "flags": 96,
                                                                                "start": 30,
                                                                                "end": 31
                                                                            },
                                                                            "typeParameters": null,
                                                                            "flags": 2097152,
                                                                            "start": 30,
                                                                            "end": 31
                                                                        },
                                                                        {
                                                                            "kind": 144,
                                                                            "typeName": {
                                                                                "kind": 134299649,
                                                                                "text": "d",
                                                                                "rawText": "d",
                                                                                "flags": 96,
                                                                                "start": 32,
                                                                                "end": 33
                                                                            },
                                                                            "typeParameters": null,
                                                                            "flags": 2097152,
                                                                            "start": 32,
                                                                            "end": 33
                                                                        }
                                                                    ],
                                                                    "flags": 2097152,
                                                                    "start": 31,
                                                                    "end": 33
                                                                },
                                                                "flags": 2097152,
                                                                "start": 30,
                                                                "end": 33
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "start": 28,
                                                        "end": 34
                                                    },
                                                    "flags": 2097152,
                                                    "start": 28,
                                                    "end": 34
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 21,
                                                "end": 34
                                            },
                                            "flags": 2097152,
                                            "start": 21,
                                            "end": 34
                                        },
                                        "flags": 2097152,
                                        "start": 19,
                                        "end": 36
                                    },
                                    "flags": 2097152,
                                    "start": 19,
                                    "end": 36
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 18,
                                "end": 36
                            },
                            "flags": 2097152,
                            "start": 10,
                            "end": 36
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 36
                },
                "flags": 2097152,
                "start": 8,
                "end": 36
            },
            "flags": 2097152,
            "start": 0,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 38,
                "end": 44
            },
            "flags": 16,
            "start": 38,
            "end": 44
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 45,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "type a = {function((((-1) => [c|d]))):string};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 19, end: 20
✖ Expected a `;` - start: 36, end: 37
✖ Declaration or statement expected - start: 37, end: 38
✖ Declaration or statement expected - start: 44, end: 45

```

