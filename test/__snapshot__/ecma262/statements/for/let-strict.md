# Kataw parser test case

## Input

`````js
for(let a, let;;);
`````

## Options

### Parser Options

`````js
{ impliedStrict: true }
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
                    "end": 7
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
                                "start": 7,
                                "end": 9
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 7,
                            "end": 9
                        },
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "let",
                                "rawText": "let",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 14
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 10,
                            "end": 14
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 14
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 18
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "for(let a, let;;);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A lexical declaration can't define a 'let' binding - start: 10, end: 14
✖ 'let' is not allowed to be used as a name in 'let' or 'const' declarations. - start: 10, end: 14
✖ Identifier expected. Reserved word in strict mode - start: 10, end: 14

```

