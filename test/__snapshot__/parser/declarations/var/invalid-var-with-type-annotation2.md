# Kataw parser test case

## Input

`````js
var a : { x: number{ y: string } } = { x: 0, y: 'foo' };

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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "optionalToken": null,
                                        "value": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "start": 12,
                                            "end": 19
                                        },
                                        "flags": 2097152,
                                        "start": 9,
                                        "end": 19
                                    },
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 19,
                                            "end": 19
                                        },
                                        "optionalToken": null,
                                        "value": {
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
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 20,
                                                        "end": 22
                                                    },
                                                    "optionalToken": null,
                                                    "value": {
                                                        "kind": 134234347,
                                                        "flags": 2097216,
                                                        "start": 23,
                                                        "end": 30
                                                    },
                                                    "flags": 2097152,
                                                    "start": 20,
                                                    "end": 30
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 19,
                                            "end": 32
                                        },
                                        "flags": 2097152,
                                        "start": 19,
                                        "end": 32
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 7,
                                "end": 34
                            },
                            "flags": 2097152,
                            "start": 5,
                            "end": 34
                        },
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 38,
                                            "end": 40
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 41,
                                            "end": 43
                                        },
                                        "flags": 32,
                                        "start": 38,
                                        "end": 43
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 44,
                                            "end": 46
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "'foo'",
                                            "flags": 4194400,
                                            "start": 47,
                                            "end": 53
                                        },
                                        "flags": 32,
                                        "start": 44,
                                        "end": 53
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 38,
                                "end": 53
                            },
                            "flags": 48,
                            "start": 36,
                            "end": 55
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 55
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 55
            },
            "flags": 16,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "var a : { x: number{ y: string } } = { x: 0, y: 'foo' };\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 19, end: 20

```

