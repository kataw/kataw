# Kataw parser test case

## Input

`````js
for(const a = 1, let = 2;;);
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
                    "kind": 37757004,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 9
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 11
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 15
                            },
                            "flags": 16,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 15
                        },
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "let",
                                "rawText": "let",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 20
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 24
                            },
                            "flags": 16,
                            "transformFlags": 128,
                            "start": 16,
                            "end": 24
                        }
                    ],
                    "flags": 16777232,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 24
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 0,
                "end": 24
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 27,
                "end": 28
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "for(const a = 1, let = 2;;);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A lexical declaration can't define a 'let' binding - start: 16, end: 20
✖ 'let' is not allowed to be used as a name in 'let' or 'const' declarations. - start: 16, end: 20

```

