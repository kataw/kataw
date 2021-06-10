# Kataw parser test case

## Input

`````js
var a: {param1?: number; param2: string; param3: string;}
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
                                        "key": {
                                            "kind": 134299649,
                                            "text": "param1",
                                            "rawText": "param1",
                                            "flags": 96,
                                            "start": 8,
                                            "end": 14
                                        },
                                        "value": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 16,
                                            "end": 23
                                        },
                                        "optionalToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "staticToken": null,
                                        "flags": 0,
                                        "start": 8,
                                        "end": 23
                                    },
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 23,
                                            "end": 23
                                        },
                                        "value": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 64,
                                                "start": 23,
                                                "end": 23
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 23,
                                            "end": 23
                                        },
                                        "optionalToken": null,
                                        "staticToken": null,
                                        "flags": 0,
                                        "start": 23,
                                        "end": 24
                                    },
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "param2",
                                            "rawText": "param2",
                                            "flags": 96,
                                            "start": 24,
                                            "end": 31
                                        },
                                        "value": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 32,
                                            "end": 39
                                        },
                                        "optionalToken": null,
                                        "staticToken": null,
                                        "flags": 0,
                                        "start": 24,
                                        "end": 39
                                    },
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 39,
                                            "end": 39
                                        },
                                        "value": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 64,
                                                "start": 39,
                                                "end": 39
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 39,
                                            "end": 39
                                        },
                                        "optionalToken": null,
                                        "staticToken": null,
                                        "flags": 0,
                                        "start": 39,
                                        "end": 40
                                    },
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "param3",
                                            "rawText": "param3",
                                            "flags": 96,
                                            "start": 40,
                                            "end": 47
                                        },
                                        "value": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 48,
                                            "end": 55
                                        },
                                        "optionalToken": null,
                                        "staticToken": null,
                                        "flags": 0,
                                        "start": 40,
                                        "end": 55
                                    },
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 55,
                                            "end": 55
                                        },
                                        "value": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 64,
                                                "start": 55,
                                                "end": 55
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 55,
                                            "end": 55
                                        },
                                        "optionalToken": null,
                                        "staticToken": null,
                                        "flags": 0,
                                        "start": 55,
                                        "end": 56
                                    }
                                ],
                                "flags": 0,
                                "start": 6,
                                "end": 57
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 57
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 57
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 57
            },
            "flags": 16,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "var a: {param1?: number; param2: string; param3: string;}",
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
✖ Identifier expected - start: 23, end: 24
✖ Identifier expected - start: 39, end: 40
✖ Identifier expected - start: 55, end: 56

```

