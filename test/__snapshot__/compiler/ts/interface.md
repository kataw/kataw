# Kataw parser test case

## Input

`````js
interface: foo
interface
abstract: foo
abstract
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface: foo\ninterface\nabstract: foo\nabstract",
    "filename": "",
    "statements": [
        {
            "kind": 2097292,
            "label": {
                "kind": 196712,
                "text": "interface",
                "rawText": "interface",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 14
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 10,
                "end": 14
            },
            "isWebCompat": true,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "interface",
                "rawText": "interface",
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 14,
                "end": 24
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 14,
            "end": 24
        },
        {
            "kind": 2097292,
            "label": {
                "kind": 196712,
                "text": "abstract",
                "rawText": "abstract",
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 24,
                "end": 33
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 38
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 34,
                "end": 38
            },
            "isWebCompat": true,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 24,
            "end": 38
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "abstract",
                "rawText": "abstract",
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 38,
                "end": 47
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 38,
            "end": 47
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 47
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

