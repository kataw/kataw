# Kataw parser test case

## Input

`````js
async () => { \u{61}wait: x }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "typeParameters": null,
            "arrowPatameterList": {
                "kind": 342,
                "parameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 7,
                "end": 7
            },
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "transformFlags": 0,
                "start": 8,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 163,
                            "label": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 8256,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 24
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 24
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 24
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 25
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 27
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 27
                            },
                            "flags": 8208,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 27
                        }
                    ],
                    "flags": 8224,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 27
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 29
            },
            "flags": 288,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "async () => { \\u{61}wait: x }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'await' keyword must not contain escaped characters - start: 13, end: 24
✖ Identifier expected - start: 24, end: 25
✖ Unicode escapes at the start of labels should not allow keywords - start: 13, end: 25

```

