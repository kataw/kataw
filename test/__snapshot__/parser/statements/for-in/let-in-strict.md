# Kataw parser test case

## Options

`````js
{ module: true }
`````

## Input

`````js
for (let in x);

for (let in in x);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 134299649,
                "text": "let",
                "rawText": "let",
                "flags": 96,
                "start": 5,
                "end": 8
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 8,
                "end": 11
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 11,
                "end": 13
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 14,
                "end": 15
            },
            "flags": 80,
            "start": 0,
            "end": 15
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 15,
                "end": 20
            },
            "initializer": {
                "kind": 134299649,
                "text": "let",
                "rawText": "let",
                "flags": 96,
                "start": 22,
                "end": 25
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 25,
                "end": 28
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 28,
                    "end": 28
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 96,
                    "start": 28,
                    "end": 31
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 31,
                    "end": 33
                },
                "flags": 32,
                "start": 28,
                "end": 33
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 34,
                "end": 35
            },
            "flags": 81,
            "start": 15,
            "end": 35
        }
    ],
    "isModule": true,
    "source": "for (let in x);\n\nfor (let in in x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. 'let' is a reserved word in strict mode - start: 8, end: 11
✖ Identifier expected. 'let' is a reserved word in strict mode - start: 25, end: 28
✖ Identifier expected - start: 28, end: 31

```

