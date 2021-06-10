# Kataw parser test case

## Input

`````js
opaque type MyObject<A, B, C>: { foo: A, bar: B } = {
  foo: A,
  bar: B,
  baz: C,
};
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
            "kind": 269,
            "declareToken": null,
            "opaqueToken": {
                "kind": 24822,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 6,
                "end": 11
            },
            "name": {
                "kind": 134299649,
                "text": "MyObject",
                "rawText": "MyObject",
                "flags": 96,
                "start": 11,
                "end": 20
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 96,
                            "start": 21,
                            "end": 22
                        },
                        "type": null,
                        "defaultType": null,
                        "flags": 0,
                        "start": 21,
                        "end": 22
                    },
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "B",
                            "rawText": "B",
                            "flags": 96,
                            "start": 23,
                            "end": 25
                        },
                        "type": null,
                        "defaultType": null,
                        "flags": 0,
                        "start": 23,
                        "end": 25
                    },
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "C",
                            "rawText": "C",
                            "flags": 96,
                            "start": 26,
                            "end": 28
                        },
                        "type": null,
                        "defaultType": null,
                        "flags": 0,
                        "start": 26,
                        "end": 28
                    }
                ],
                "flags": 0,
                "start": 20,
                "end": 29
            },
            "superType": {
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
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 32,
                            "end": 36
                        },
                        "optionalToken": null,
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "A",
                                "rawText": "A",
                                "flags": 96,
                                "start": 37,
                                "end": 39
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 37,
                            "end": 39
                        },
                        "flags": 0,
                        "start": 32,
                        "end": 40
                    },
                    {
                        "kind": 193,
                        "protoKeyword": null,
                        "staticToken": null,
                        "getKeyword": null,
                        "setKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 40,
                            "end": 44
                        },
                        "optionalToken": null,
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "start": 45,
                                "end": 47
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 45,
                            "end": 47
                        },
                        "flags": 0,
                        "start": 40,
                        "end": 47
                    }
                ],
                "flags": 0,
                "start": 30,
                "end": 49
            },
            "impltype": {
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
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 53,
                            "end": 59
                        },
                        "optionalToken": null,
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "A",
                                "rawText": "A",
                                "flags": 96,
                                "start": 60,
                                "end": 62
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 60,
                            "end": 62
                        },
                        "flags": 0,
                        "start": 53,
                        "end": 63
                    },
                    {
                        "kind": 193,
                        "protoKeyword": null,
                        "staticToken": null,
                        "getKeyword": null,
                        "setKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 63,
                            "end": 69
                        },
                        "optionalToken": null,
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "start": 70,
                                "end": 72
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 70,
                            "end": 72
                        },
                        "flags": 0,
                        "start": 63,
                        "end": 73
                    },
                    {
                        "kind": 193,
                        "protoKeyword": null,
                        "staticToken": null,
                        "getKeyword": null,
                        "setKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "start": 73,
                            "end": 79
                        },
                        "optionalToken": null,
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "start": 80,
                                "end": 82
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 80,
                            "end": 82
                        },
                        "flags": 0,
                        "start": 73,
                        "end": 83
                    }
                ],
                "flags": 0,
                "start": 51,
                "end": 85
            },
            "flags": 0,
            "start": 0,
            "end": 85
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 85,
            "end": 86
        }
    ],
    "isModule": false,
    "source": "opaque type MyObject<A, B, C>: { foo: A, bar: B } = {\n  foo: A,\n  bar: B,\n  baz: C,\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 86
}
```

### Printed

```javascript



```

### Diagnostics

```javascript
✔ No errors
```

