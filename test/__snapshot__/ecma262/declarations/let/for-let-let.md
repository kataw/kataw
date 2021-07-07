# Kataw parser test case

## Input

`````js
for (let {x: y = let};;) {}
`````

## Options

### Parser Options

`````js
{}
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
                                                "end": 14
                                            },
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "let",
                                                "rawText": "let",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 16,
                                                "end": 20
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 20
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 20
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 21
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 8,
                            "end": 21
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 21
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 0,
                "end": 21
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 26
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 24,
                "end": 27
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "for (let {x: y = let};;) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing initializer in destructuring declaration - start: 21, end: 22

```

