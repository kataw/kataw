# Kataw parser test case

## Input

`````js
for // comment
(;;);

for /* comment */(;;);
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
            "initializer": null,
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 19,
                "end": 20
            },
            "flags": 80,
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
            "initializer": null,
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 43,
                "end": 44
            },
            "flags": 81,
            "start": 20,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "for // comment\n(;;);\n\nfor /* comment */(;;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

for (;;);
for (;;);

```

### Diagnostics

```javascript
✔ No errors
```

