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
            "kind": 312,
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
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
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
                            "flags": 2097152,
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
                            "flags": 2097152,
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
                            "flags": 2097152,
                            "start": 26,
                            "end": 28
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 21,
                    "end": 28
                },
                "flags": 2097152,
                "start": 20,
                "end": 29
            },
            "superType": {
                "kind": 24822,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "impltype": null,
            "flags": 2097152,
            "start": 0,
            "end": 29
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 32,
                            "end": 36
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 36,
                            "end": 37
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 134299649,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 96,
                                        "start": 37,
                                        "end": 39
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 40,
                                        "end": 44
                                    }
                                ],
                                "flags": 32,
                                "start": 37,
                                "end": 44
                            },
                            "flags": 16,
                            "start": 37,
                            "end": 44
                        },
                        "flags": 16,
                        "start": 32,
                        "end": 44
                    }
                ],
                "flags": 16,
                "start": 32,
                "end": 44
            },
            "flags": 16,
            "start": 30,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "start": 45,
                "end": 47
            },
            "flags": 16,
            "start": 45,
            "end": 47
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 53,
                            "end": 59
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 59,
                            "end": 60
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 134299649,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 96,
                                        "start": 60,
                                        "end": 62
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 63,
                                        "end": 69
                                    }
                                ],
                                "flags": 32,
                                "start": 60,
                                "end": 69
                            },
                            "flags": 16,
                            "start": 60,
                            "end": 69
                        },
                        "flags": 17,
                        "start": 53,
                        "end": 69
                    }
                ],
                "flags": 17,
                "start": 53,
                "end": 69
            },
            "flags": 16,
            "start": 51,
            "end": 69
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 70,
                        "end": 72
                    },
                    {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 73,
                        "end": 79
                    }
                ],
                "flags": 32,
                "start": 70,
                "end": 79
            },
            "flags": 16,
            "start": 70,
            "end": 79
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 80,
                        "end": 82
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 83,
                        "end": 83
                    }
                ],
                "flags": 32,
                "start": 80,
                "end": 83
            },
            "flags": 16,
            "start": 80,
            "end": 83
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
✖ Declaration or statement expected - start: 29, end: 30
✖ Expected a `;` - start: 44, end: 45
✖ Declaration or statement expected - start: 47, end: 49
✖ Declaration or statement expected - start: 49, end: 51
✖ Expected a `;` - start: 69, end: 70
✖ Expected a `;` - start: 79, end: 80
✖ Identifier expected - start: 83, end: 85

```

