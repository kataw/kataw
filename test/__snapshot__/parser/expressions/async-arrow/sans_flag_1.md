# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
async _ => _
/foo/
`````

## Output

### Hybrid CST

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
                    "flags": 0,
                    "start": 7,
                    "end": 10
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "original": "_",
                            "text": "_",
                            "rawText": " _",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 0,
                        "end": 7
                    }
                ],
                "asyncToken": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "original": "_",
                            "text": "_",
                            "rawText": " _",
                            "flags": 96,
                            "start": 10,
                            "end": 12
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 65,
                            "start": 12,
                            "end": 14
                        },
                        "right": {
                            "kind": 134299649,
                            "original": "foo",
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 14,
                            "end": 17
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 17
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 64,
                        "start": 17,
                        "end": 18
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 18,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 10,
                    "end": 18
                },
                "flags": 288,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": true,
    "source": "async _ => _\n/foo/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 18, end: 18

```

