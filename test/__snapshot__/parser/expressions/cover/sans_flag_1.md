# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
_ => _
/foo/
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1,
                    "end": 4
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "_",
                    "rawText": "_",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "_",
                            "rawText": "_",
                            "flags": 96,
                            "start": 4,
                            "end": 6
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 97,
                            "start": 6,
                            "end": 8
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 8,
                            "end": 11
                        },
                        "flags": 32,
                        "start": 4,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 96,
                        "start": 11,
                        "end": 12
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 12,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 4,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": true,
    "source": "_ => _\n/foo/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 12, end: 12

```

