# Kataw parser test case

## Input

`````js
for (let {x:y=z} = obj, {a:b=c});
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
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 10,
                                                "end": 11
                                            },
                                            "value": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 12,
                                                "end": 13
                                            },
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 14,
                                                "end": 15
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 15
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 15
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 16
                            },
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "obj",
                                "rawText": "obj",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 22
                            },
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 8,
                            "end": 22
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
                                            "key": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 25,
                                                "end": 26
                                            },
                                            "value": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 27,
                                                "end": 28
                                            },
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 30
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 30
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 30
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 31
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 23,
                            "end": 31
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 31
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 0,
                "end": 31
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 31,
                "end": 31
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 32,
                "end": 33
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "for (let {x:y=z} = obj, {a:b=c});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing initializer in destructuring declaration - start: 31, end: 32
✖ ',' expected - start: 31, end: 32
✖ Identifier expected - start: 31, end: 32

```

