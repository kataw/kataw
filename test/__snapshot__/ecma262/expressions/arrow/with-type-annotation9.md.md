# Kataw parser test case

## Input

`````js
(...[0]: string)=>0;
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
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 5
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 5,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 8,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "transformFlags": 0,
                "start": 18,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 18,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "(...[0]: string)=>0;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 5, end: 6
✖ ']' is not allowed here. Did you mean ';'? - start: 6, end: 7
✖ Declaration or statement expected - start: 7, end: 8
✖ ')' is not allowed here. Did you mean ';'? - start: 15, end: 16
✖ Declaration or statement expected - start: 16, end: 18

```

