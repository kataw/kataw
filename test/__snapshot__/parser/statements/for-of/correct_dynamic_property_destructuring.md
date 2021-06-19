# Kataw parser test case

## Input

`````js
for (let {[x]: y} of obj);
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
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 10,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 10,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 17
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 8,
                        "end": 17
                    }
                ],
                "flags": 16,
                "start": 8,
                "end": 17
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 17,
                "end": 20
            },
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 20,
                "end": 24
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 25,
                "end": 26
            },
            "flags": 80,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "for (let {[x]: y} of obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
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

