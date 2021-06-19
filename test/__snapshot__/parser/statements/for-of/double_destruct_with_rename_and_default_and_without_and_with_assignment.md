# Kataw parser test case

## Input

`````js
for (let {x:y=z}, {a:b=c} of obj);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 11
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 15
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 10,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 16
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 8,
                        "end": 16
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 21,
                                            "end": 22
                                        },
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "start": 19,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 19,
                                "end": 24
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 25
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 17,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 8,
                "end": 25
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 25,
                "end": 28
            },
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 28,
                "end": 32
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 33,
                "end": 34
            },
            "flags": 80,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "for (let {x:y=z}, {a:b=c} of obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing initializer in destructuring declaration - start: 16, end: 17
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 25, end: 28

```

