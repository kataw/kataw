# Kataw parser test case

## Input

`````js

for (async.x of y);

for (\u0061sync of x);

for (async of => {};;);

for ((async) of x);

//for (async of => {} of x);
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
                "flags": 1,
                "start": 0,
                "end": 4
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 13,
                "end": 16
            },
            "initializer": {
                "kind": 129,
                "member": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 6,
                    "end": 11
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 12,
                    "end": 13
                },
                "flags": 32,
                "start": 6,
                "end": 13
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 19,
                "end": 20
            },
            "awaitKeyword": null,
            "flags": 16,
            "start": 0,
            "end": 20
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 1,
                "start": 20,
                "end": 25
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 37,
                "end": 40
            },
            "initializer": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 27,
                "end": 37
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 40,
                "end": 42
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 43,
                "end": 44
            },
            "awaitKeyword": null,
            "flags": 16,
            "start": 20,
            "end": 44
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 1,
                "start": 44,
                "end": 49
            },
            "initializer": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 59,
                    "end": 62
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "of",
                    "rawText": "of",
                    "flags": 96,
                    "start": 56,
                    "end": 59
                },
                "asyncToken": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 51,
                    "end": 56
                },
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 64,
                        "end": 64
                    },
                    "flags": 32,
                    "start": 62,
                    "end": 65
                },
                "flags": 288,
                "start": 51,
                "end": 65
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 68,
                "end": 69
            },
            "flags": 16,
            "start": 44,
            "end": 69
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 1,
                "start": 69,
                "end": 74
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 83,
                "end": 86
            },
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 77,
                    "end": 82
                },
                "flags": 32,
                "start": 76,
                "end": 83
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 86,
                "end": 88
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 89,
                "end": 90
            },
            "awaitKeyword": null,
            "flags": 16,
            "start": 69,
            "end": 90
        }
    ],
    "isModule": false,
    "source": "\nfor (async.x of y);\n\nfor (\\u0061sync of x);\n\nfor (async of => {};;);\n\nfor ((async) of x);\n\n//for (async of => {} of x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 120
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

