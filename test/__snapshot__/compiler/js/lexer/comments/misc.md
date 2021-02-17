# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
/* x = 1;*/

var /* y = 1;*/

/*CHECK#5*/
/*var x = 1;

/* Test262Error.thrower('#10: Correct interpretation multi line comments');
**/


/*CHECK#11*/
/****** Test262Error.thrower('#11: Correct interpretation multi line comments');*********
***********
*
**********
**/

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "/* x = 1;*/\n\nvar /* y = 1;*/\n\n/*CHECK#5*/\n/*var x = 1;\n\n/* Test262Error.thrower('#10: Correct interpretation multi line comments');\n**/\n\n\n/*CHECK#11*/\n/****** Test262Error.thrower('#11: Correct interpretation multi line comments');*********\n***********\n*\n**********\n**/\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 16,
                    "end": 16
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 16
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 16
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 270
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

