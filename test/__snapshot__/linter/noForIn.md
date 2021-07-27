# Kataw parser test case

## Input

`````js
for(x in y);

for (var in y);
`````

## Options

### Parser Options

`````js
{ lint: { noForIn: true, noVar: true } }
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
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 5
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 8
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 11,
                "end": 12
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 12,
                "end": 17
            },
            "initializer": {
                "kind": 341,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 22
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 22
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 12,
                "end": 25
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 0,
                "start": 22,
                "end": 25
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 25,
                "end": 27
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 28,
                "end": 29
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 12,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "for(x in y);\n\nfor (var in y);",
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
✖ Use a for...of statement instead of for...in. If iterating over an object, use Object.keys() to access its enumerable keys. - start: 8, end: 10
✖ Use a for...of statement instead of for...in. If iterating over an object, use Object.keys() to access its enumerable keys. - start: 25, end: 27

```

