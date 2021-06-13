# Kataw parser test case

## Input

`````js
type a = {[((({a([][]):foo}) => [c|d]))]:string, x:string};
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
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 195,
                        "protoKeyword": null,
                        "staticToken": null,
                        "name": null,
                        "key": {
                            "kind": 290,
                            "type": {
                                "kind": 290,
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
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 15,
                                                "end": 16
                                            },
                                            "optionalToken": null,
                                            "value": {
                                                "kind": 148,
                                                "functionTypeParameterList": {
                                                    "kind": 282,
                                                    "parameters": [],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 17,
                                                    "end": 17
                                                },
                                                "returnType": {
                                                    "kind": 136,
                                                    "type": {
                                                        "kind": 147,
                                                        "elementTypes": [],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "start": 17,
                                                        "end": 19
                                                    },
                                                    "flags": 2097152,
                                                    "start": 20,
                                                    "end": 21
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 16,
                                                "end": 21
                                            },
                                            "flags": 2097152,
                                            "start": 15,
                                            "end": 21
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 14,
                                    "end": 21
                                },
                                "flags": 2097152,
                                "start": 13,
                                "end": 22
                            },
                            "flags": 2097152,
                            "start": 11,
                            "end": 22
                        },
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 23,
                                "end": 26
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 23,
                            "end": 26
                        },
                        "flags": 2097152,
                        "start": 10,
                        "end": 26
                    }
                ],
                "trailingComma": false,
                "flags": 2097152,
                "start": 8,
                "end": 27
            },
            "flags": 2097152,
            "start": 0,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 33,
                                "end": 34
                            },
                            "operatorToken": {
                                "kind": 134251592,
                                "flags": 96,
                                "start": 34,
                                "end": 35
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 35,
                                "end": 36
                            },
                            "flags": 32,
                            "start": 33,
                            "end": 36
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 33,
                    "end": 36
                },
                "flags": 32,
                "start": 31,
                "end": 37
            },
            "flags": 16,
            "start": 31,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "string",
                        "rawText": "string",
                        "flags": 96,
                        "start": 41,
                        "end": 47
                    },
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 48,
                        "end": 50
                    }
                ],
                "flags": 32,
                "start": 41,
                "end": 50
            },
            "flags": 16,
            "start": 41,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 51,
                "end": 57
            },
            "flags": 16,
            "start": 51,
            "end": 57
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 58,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "type a = {[((({a([][]):foo}) => [c|d]))]:string, x:string};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 17, end: 18
✖ Expected a `;` - start: 21, end: 22
✖ Did you forgot a ']' to match the `[` token? - start: 22, end: 23
✖ Expected a `;` - start: 27, end: 28
✖ Declaration or statement expected - start: 28, end: 31
✖ Expected a `;` - start: 37, end: 38
✖ Declaration or statement expected - start: 38, end: 39
✖ Declaration or statement expected - start: 39, end: 40
✖ Declaration or statement expected - start: 40, end: 41
✖ Expected a `;` - start: 50, end: 51
✖ Declaration or statement expected - start: 57, end: 58

```

