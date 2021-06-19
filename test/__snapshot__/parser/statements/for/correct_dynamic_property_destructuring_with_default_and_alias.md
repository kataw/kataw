# Kataw parser test case

## Input

`````js
for (let {[x]: y = z} = a);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
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
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 11,
                                                "end": 12
                                            },
                                            "flags": 32,
                                            "start": 10,
                                            "end": 13
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 14,
                                            "end": 16
                                        },
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 20
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 10,
                                "end": 20
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 23,
                            "end": 25
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 8,
                "end": 25
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 25,
                "end": 25
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 26,
                "end": 27
            },
            "flags": 80,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "for (let {[x]: y = z} = a);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 25, end: 26
✖ Identifier expected - start: 25, end: 26

```

