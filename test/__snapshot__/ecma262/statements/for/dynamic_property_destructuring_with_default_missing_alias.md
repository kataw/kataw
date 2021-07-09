# Kataw parser test case

## Input

`````js
for (let {[x] = y} = z;;);
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
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 8
                },
                "binding": {
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
                                            "key": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 11,
                                                    "end": 12
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 10,
                                                "end": 13
                                            },
                                            "value": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 13
                                            },
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 15,
                                                "end": 17
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 17
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 17
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 18
                            },
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 22
                            },
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 8,
                            "end": 22
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 22
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 0,
                "end": 22
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 25,
                "end": 26
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "for (let {[x] = y} = z;;);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Object property expected - start: 13, end: 15

```

