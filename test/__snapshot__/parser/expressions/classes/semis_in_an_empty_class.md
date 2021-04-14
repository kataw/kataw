# Kataw parser test case

## Input

`````js
class A {; ;; ;}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 81921,
                "text": "A",
                "rawText": "A",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 9,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 9
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 9,
            "end": 10
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 10,
            "end": 12
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 12,
            "end": 13
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 13,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "class A {; ;; ;}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 10
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 15,
            "end": 16
        }
    ],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

