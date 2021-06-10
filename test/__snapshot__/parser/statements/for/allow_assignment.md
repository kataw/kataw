# Kataw parser test case

## Input

`````js
for (foo=10;;);
`````

## Options

### Parser Options

`````js
{}
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
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 5,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 8,
                    "end": 9
                },
                "right": {
                    "kind": 201392130,
                    "text": 10,
                    "rawText": "10",
                    "flags": 96,
                    "start": 9,
                    "end": 11
                },
                "flags": 32,
                "start": 0,
                "end": 11
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 14,
                "end": 15
            },
            "flags": 80,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "for (foo=10;;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

for (foo = 10; ; );
```

### Diagnostics

```javascript
✔ No errors
```

