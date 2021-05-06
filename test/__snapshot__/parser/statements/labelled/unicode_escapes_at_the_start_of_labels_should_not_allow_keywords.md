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
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 8,
                "end": 11
            },
            "typeParameters": null,
            "parameters": [],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
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
                                    "kind": 82032,
                                    "flags": 8192,
                                    "start": 13,
                                    "end": 24
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 68,
                                    "start": 24,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 24
                            },
                            "labels": [
                                {
                                    "kind": 256,
                                    "iterationStatement": false,
                                    "flags": 8208,
                                    "start": 13,
                                    "end": 24
                                }
                            ],
                            "colonToken": {
                                "kind": 21,
                                "flags": 0,
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
                                    "start": 25,
                                    "end": 27
                                },
                                "flags": 16,
                                "start": 25,
                                "end": 27
                            },
                            "flags": 8208,
                            "start": 13,
                            "end": 27
                        }
                    ],
                    "flags": 8224,
                    "start": 13,
                    "end": 27
                },
                "flags": 32,
                "start": 11,
                "end": 29
            },
            "flags": 288,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "async () => { \\u{61}wait: x }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

async () =>  {
  await : x;
}
```

### Diagnostics

```javascript
✖ 'await' keyword must not contain escaped characters - start: 13, end: 24
✖ Expression expected - start: 24, end: 25
✖ Unicode escapes at the start of labels should not allow keywords - start: 13, end: 25

```

