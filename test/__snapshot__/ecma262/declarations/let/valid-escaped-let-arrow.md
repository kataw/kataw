# Kataw parser test case

## Input

`````js
l\u0065t => 42;

async l\u0065t => 42;
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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 8
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
                    "kind": 201392130,
                    "text": 42,
                    "rawText": "42",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 14
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 22
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "l\\u0065t",
                    "flags": 16480,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 31
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 34
                },
                "contents": {
                    "kind": 201392130,
                    "text": 42,
                    "rawText": "42",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 37
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 15,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 15,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "l\\u0065t => 42;\n\nasync l\\u0065t => 42;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
let => 42;
async l\u0065t => 42;

```

### Diagnostics

```javascript
✔ No errors
```

