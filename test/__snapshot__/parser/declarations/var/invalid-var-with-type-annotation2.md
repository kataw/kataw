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
                "flags": 768,
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
                            "flags": 768,
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
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "value": {
                                            "kind": 134234345,
                                            "flags": 768,
                                            "start": 12,
                                            "end": 19
                                        },
                                        "optionalToken": null,
                                        "staticToken": false,
                                        "flags": 0,
                                        "start": 9,
                                        "end": 19
                                    },
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 16637,
                                            "text": "",
                                            "autofix": 0,
                                            "flags": 12,
                                            "start": 19,
                                            "end": 19
                                        },
                                        "value": {
                                            "kind": 134234353,
                                            "properties": [
                                                {
                                                    "kind": 193,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 768,
                                                        "start": 20,
                                                        "end": 22
                                                    },
                                                    "value": {
                                                        "kind": 134234347,
                                                        "flags": 768,
                                                        "start": 23,
                                                        "end": 30
                                                    },
                                                    "optionalToken": null,
                                                    "staticToken": false,
                                                    "flags": 0,
                                                    "start": 20,
                                                    "end": 30
                                                }
                                            ],
                                            "indexers": [],
                                            "callProperties": [],
                                            "internalSlots": [],
                                            "flags": 0,
                                            "start": 19,
                                            "end": 32
                                        },
                                        "optionalToken": null,
                                        "staticToken": false,
                                        "flags": 0,
                                        "start": 19,
                                        "end": 32
                                    }
                                ],
                                "indexers": [],
                                "callProperties": [],
                                "internalSlots": [],
                                "flags": 0,
                                "start": 7,
                                "end": 34
                            },
                            "flags": 0,
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
                                        "left": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 768,
                                            "start": 41,
                                            "end": 43
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 38,
                                            "end": 40
                                        },
                                        "flags": 256,
                                        "start": 38,
                                        "end": 43
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 67109632,
                                            "start": 47,
                                            "end": 53
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 768,
                                            "start": 44,
                                            "end": 46
                                        },
                                        "flags": 256,
                                        "start": 44,
                                        "end": 53
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 38,
                                "end": 53
                            },
                            "flags": 256,
                            "start": 36,
                            "end": 55
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 55
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 55
            },
            "flags": 128,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "text": "var a : { x: number{ y: string } } = { x: 0, y: 'foo' };\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ A rest element cannot have an initializer - start: 19, end: 20
@{x2716}@ Unexpected token. - start: 19, end: 20

```

