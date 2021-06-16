# Kataw parser test case

## Input

`````js
for (let {x : y, z : a} of obj);
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
                                            "start": 13,
                                            "end": 15
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 10,
                                        "end": 15
                                    },
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 20,
                                            "end": 22
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 16,
                                        "end": 22
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 10,
                                "end": 22
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 23
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 8,
                        "end": 23
                    }
                ],
                "flags": 16,
                "start": 8,
                "end": 23
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 23,
                "end": 26
            },
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 26,
                "end": 30
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 31,
                "end": 32
            },
            "flags": 80,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "for (let {x : y, z : a} of obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

for (let of obj);
```

### Diagnostics

```javascript
✔ No errors
```

