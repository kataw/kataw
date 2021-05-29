# Kataw parser test case

## Input

`````js

for (async.x of y);

for (async of => {};;);

for ((async) of x);

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
                "flags": 81,
                "start": 0,
                "end": 4
            },
            "awaitKeyword": null,
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
                "flags": 536870944,
                "start": 6,
                "end": 13
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 13,
                "end": 16
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
            "flags": 16,
            "start": 0,
            "end": 20
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 20,
                "end": 25
            },
            "initializer": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 35,
                    "end": 38
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "of",
                    "rawText": "of",
                    "flags": 96,
                    "start": 32,
                    "end": 35
                },
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 27,
                    "end": 32
                },
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 40,
                        "end": 40
                    },
                    "flags": 32,
                    "start": 38,
                    "end": 41
                },
                "flags": 288,
                "start": 27,
                "end": 41
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 44,
                "end": 45
            },
            "flags": 16,
            "start": 20,
            "end": 45
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 45,
                "end": 50
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 53,
                    "end": 58
                },
                "flags": 32,
                "start": 52,
                "end": 59
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 59,
                "end": 62
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 62,
                "end": 64
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 65,
                "end": 66
            },
            "flags": 16,
            "start": 45,
            "end": 66
        }
    ],
    "isModule": false,
    "source": "\nfor (async.x of y);\n\nfor (async of => {};;);\n\nfor ((async) of x);\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript

for (async.x of y);
for (async of =>  {}; ; );
for ((async) of x);
```

### Diagnostics

```javascript
✔ No errors
```

