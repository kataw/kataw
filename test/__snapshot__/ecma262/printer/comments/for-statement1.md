# Kataw parser test case

## Input

`````js
for(;/*1*/;);
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
                "start": 12,
                "end": 13
            },
            "flags": 80,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "for(;/*1*/;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

for (;/*1*/;)
  ;

```

### Diagnostics

```javascript
✔ No errors
```

